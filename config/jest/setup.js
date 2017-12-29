// setup file
const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

const jsdom = require('jsdom');
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

configure({ adapter: new Adapter() });
