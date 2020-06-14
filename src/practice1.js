function parseData(input) {
  let {
    data: [
      [name1, age1, gender1, birthday1],
      [name2, age2, gender2, birthday2],
    ],
    column: [columnName, columnAge, columnGender, columnBirthday],
  } = input;

  let arr = [
    {
      [columnAge.name]: age1,
      [columnBirthday.name]: birthday1,
      [columnGender.name]: gender1,
      [columnName.name]: name1,
    },
    {
      [columnAge.name]: age2,
      [columnBirthday.name]: birthday2,
      [columnGender.name]: gender2,
      [columnName.name]: name2,
    },
  ];
  return arr;
}
export { parseData };
