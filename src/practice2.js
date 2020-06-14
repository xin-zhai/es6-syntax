function inject(items, sections) {
  let [section1, section2] = sections;
  items.splice(section1.index, 0, section1.content);
  items.splice(section2.index + 1, 0, section2.content);
  return items;
}
export { inject };
