export const navigateTo = (destination, ctx) => {
  // console.log(ctx);
  // console.log(destination)
  ctx.navLocation.push("/" + destination + "");
};