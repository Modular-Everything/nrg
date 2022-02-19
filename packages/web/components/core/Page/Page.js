import PropTypes from "prop-types";

export function Page({ data }) {
  return (
    <main>
      <h1>{data?.title}</h1>
      Loaded in <pre style={{ display: "inline" }}>Page.js</pre>
    </main>
  );
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
};
