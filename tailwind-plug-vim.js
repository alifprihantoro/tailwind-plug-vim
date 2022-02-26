const fs = require("fs");

fs.readFile("./tes2.css", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const hasil = data
    .replace(/\.(.*\s){/gim, `snippet $1 "tailwind"\n .$1 {`)
    .replace(/\.(.*\s){/gim, '$1 ${1:.$1\\{')
    .replace(/}/gim, '\\}\n}\n')
    .replace(/;/gim,"\\;")
    .replace(/\s\s\s/gim, "")
    .replace(/\n\s/gim, "\n");

  // console.log(hasil)
  fs.writeFile("tes.snippets", hasil, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  });


  // console.log(data);
  // data.replace(/\..*\ /gim, function (a) {
  //   // const rm_dot=a.replace(/\./, "")
  //   // console.log(rm_dot);
  //   const hasil = data
  //     .replace(/{/gim, `"{`)
  //     .replace(/}/gim, `} ${a}`);
  //   console.log(hasil)
  // });
});
