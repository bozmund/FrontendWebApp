class ConvertModel {
  constructor(conversionType, from, to, link) {
    // Remove the link prefix
    link = link.replace("https://open.spotify.com/track/", "");
    link = link.replace("https://tidal.com/browse/track/", "");

    // Assign values
    this.conversionType = conversionType;
    this.from = from;
    this.to = to;
    this.link = link;
  }
}
export default ConvertModel;
