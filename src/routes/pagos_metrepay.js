module.exports = (app) => {
  const Pagos_metrepay = app.db.models.Pagos_metrepay;
  const apiToken = "35dd7b33-3c2a-48a4-827f-042e57c9c3b8";

  app
    .route("/api/pagos_metrepay")
    .get((req, res) => {
      console.log(req.headers);
      if (!req.headers.apitoken) {
        return res.status(403).send({
          error: "Forbidden",
          message: "Tu petición no tiene cabecera de autorización",
        });
      }
      if (req.headers.apitoken === apiToken) {
        Pagos_metrepay.findAll()
          .then((result) => res.json(result))
          .catch((error) => {
            res.status(402).json({
              msg: error.menssage,
            });
          });
      } else {
        return res.status(403).send({
          error: "Forbidden",
          message: "Cabecera de autorización inválida",
        });
      }
    })

    .post((req, res) => {
      if (!req.headers.apitoken) {
        return res.status(403).send({
          error: "Forbidden",
          message: "Tu petición no tiene cabecera de autorización",
        });
      }

      if (req.headers.apitoken === apiToken) {
        Pagos_metrepay.create(req.body.data)
          .then((result) => res.status(200).json({ message: req.body.event }))
          .catch((error) => res.json(error));
      } else {
        return res.status(403).send({
          error: "Forbidden",
          message: "Cabecera de autorización inválida",
        });
      }
    });

  app
    .route("/api/pagos_metrepay/:customIdentifier")
    .get((req, res) => {
      if (!req.headers.apitoken) {
        return res.status(403).send({
          error: "Forbidden",
          message: "Tu petición no tiene cabecera de autorización",
        });
      }

      if (req.headers.apitoken === apiToken) {
        Pagos_metrepay.findAll({
          where: req.params,
        })
          .then((result) => res.json(result))
          .catch((error) => {
            res.status(404).json({
              msg: error.message,
            });
          });
      } else {
        return res.status(403).send({
          error: "Forbidden",
          message: "Cabecera de autorización inválida",
        });
      }
    })


    // Ver como se van a actualizar los pagos antes de realizar la actualizacion/modificacion de estado
    // .put((req, res) => {
    //   if (!req.headers.apitoken) {
    //     return res.status(403).send({
    //       error: "Forbidden",
    //       message: "Tu petición no tiene cabecera de autorización",
    //     });
    //   }

    //   if (req.headers.apitoken === apiToken) {
    //     Pagos_metrepay.update(req.body, {
    //       where: req.params,
    //     })
    //       .then((result) => res.sendStatus(204))
    //       .catch((error) => {
    //         res.status(412).json({
    //           msg: error.message,
    //         });
    //       });
    //   } else {
    //     return res.status(403).send({
    //       error: "Forbidden",
    //       message: "Cabecera de autorización inválida",
    //     });
    //   }
    // });



  // .delete((req, res) => {
  //   //const id = req.params.id;
  //   Pagos_metrepay.destroy({
  //     where: req.params,
  //   })
  //     .then(() => res.json(req.params))
  //     .catch((error) => {
  //       res.status(412).json({
  //         msg: error.message,
  //       });
  //     });
  // });
};
