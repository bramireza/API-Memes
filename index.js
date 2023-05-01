const app = require("./src/app");

app.listen(process.env.PORT || 8000, () =>
  console.log(`Server init at http://localhost:${process.env.PORT}`)
);
