class ConvertModel {
  constructor(conversionType, from, to, link) {
    let url = new URL(link);
    // Remove the link prefix
    link = url.pathname.split("/")[2];
    // Assign values
    this.conversionType = conversionType;
    this.from = from;
    this.to = to;
    this.link = link;
  }
}
export default ConvertModel;
