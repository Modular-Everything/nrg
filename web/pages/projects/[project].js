import React from "react";
import PropTypes from "prop-types";

import {
  projectQuery,
  projectSlugsQuery,
  menuQuery,
  globalMetaDataQuery,
} from "../../lib/queries";
import { usePreviewSubscription } from "../../lib/sanity";
import { sanityClient, getClient } from "../../lib/sanity.server";
import Layout from "../../components/Core/Layout";
import BlockBuilder from "../../components/Blocks";
import AutoLayout from "../../components/Core/AutoLayout";
import PreviewBanner from "../../components/Core/PreviewBanner";
import FixedBgText from "../../components/Blocks/FixedBgText";
import SEO from "../../components/Core/SEO";

// ---

function Project({ data = {}, preview }) {
  const slug = data?.project?.slug;
  const { data: project } = usePreviewSubscription(projectQuery, {
    params: { project: slug },
    initialData: data.project,
    enabled: preview && slug,
    useGroqBeta: true,
  });

  console.log(project);

  return (
    <Layout menuItems={data?.menuItems} bgColor={project?.backgroundColor}>
      <SEO
        pageTitle={project?.title}
        globalMetadata={data?.globalMetaData}
        customMetadata={project?.seo}
      />

      {preview && <PreviewBanner slug={project?.slug?.current} />}

      <AutoLayout>
        <div className="top">
          {project?.topBlocks && <BlockBuilder blocks={project?.topBlocks} />}
        </div>

        <div className="blocks">
          {project?.backgroundText && (
            <FixedBgText text={project?.backgroundText} />
          )}
          <BlockBuilder blocks={project?.blocks} preview={preview} />
        </div>

        {project?.bottomBlocks && (
          <div className="bottom">
            <BlockBuilder blocks={project?.bottomBlocks} />
          </div>
        )}
      </AutoLayout>
    </Layout>
  );
}

export default Project;

export async function getStaticProps({ params, preview = false }) {
  const project = await getClient(preview).fetch(projectQuery, {
    project: params?.project,
  });

  const menuItems = await getClient(preview).fetch(menuQuery);
  const globalMetaData = await getClient(preview).fetch(globalMetaDataQuery);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      preview,
      data: {
        project,
        menuItems: menuItems[0],
        globalMetaData: globalMetaData[0],
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(projectSlugsQuery);
  return {
    paths: paths.map((project) => ({ params: { project } })),
    fallback: true,
  };
}

Project.propTypes = {
  data: PropTypes.object.isRequired,
  preview: PropTypes.bool.isRequired,
};
