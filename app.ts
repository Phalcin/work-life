import express, { Express, Response, Request } from 'express';

app.get('/menu/list', function (req: Request, res: Response) {
  const requestQuery: { id: number[] | number } | any = req.query;
  const foundMenus = [];
  const validIds: number[] = [34, 45, 23, 23, 4];

  if (typeof requestQuery.id === 'string') {
    // parse the id to integer and do what is necessary
    const parseId: number = parseInt(requestQuery.id);
  } else {
    for (let id of requestQuery.id) {
      const parseId: number = parseInt(id);
      const _: number | undefined = validIds.find(
        (validId) => validId === parseId,
      );

      if (!_) {
        return res
          .status(404)
          .send({ message: `Menu of id ${parseId} does not exist!` });
      }

      foundMenus.push({ name: 'banku', id: 3 }, { name: 'beans', id: 5 });
    }
  }

  res.status(200).send({ message: foundMenus });
});
