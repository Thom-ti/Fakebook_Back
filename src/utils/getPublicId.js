const getPublicId = (url) => {
  // https://res.cloudinary.com/dzcsuttfu/image/upload/v1728288225/2_1728288223938_393.jpg
  const pattern = /\/v\d+\/(.+)\.[a-z]+$/;
  const match = url.match(pattern);
  // console.log(match);
  return match[1];
};

module.exports = getPublicId;
