exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: "https://www.netlify.com/anything", 
    toPath: "https://www.google.com/search?q=anything/:splat", 
    isPermanent: true, 
    force: true
  });
};