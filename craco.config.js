const path = require(`path`);

const prefix = "./src";
const aliases = {
  "@components": `${prefix}/components`,
  "@UI": `${prefix}/components/UI`,
  "@assets": `${prefix}/assets`,
  "@hooks": `${prefix}/hooks`,
  "@styles": `${prefix}/assets/styles`,
  "@utils": `${prefix}/utils`,
  "@types": `${prefix}/types`,
  "@API": `${prefix}/API`,
  "@router": `${prefix}/router/index`,
  "@context": `${prefix}/context/index`,
};

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    path.resolve(__dirname, value),
  ]),
);

module.exports = {
  webpack: {
    alias: resolvedAliases,
  },
};
