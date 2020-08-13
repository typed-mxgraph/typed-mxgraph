declare module 'mxgraph' {
  class mxXmlRequest {
    constructor(url: string, params: any, method: string, async: boolean, username: string, password: string);

    getDocumentElement(): XMLDocument;
  }
}
