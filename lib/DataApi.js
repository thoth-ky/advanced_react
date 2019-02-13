class DataApi {
  constructor(data) {
    this.rawData = data;
  }

  static mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  getArticles() {
    return DataApi.mapIntoObject(this.rawData.articles);
  }

  getAuthors() {
    return DataApi.mapIntoObject(this.rawData.authors);
  }
}

export default DataApi;
