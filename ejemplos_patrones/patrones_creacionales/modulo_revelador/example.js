const Users = (() => {
  const recurso = '/users';

  return {
    listar: async () => {
      await fetch(recurso).then((x) => x.json());
    },
    crear: async (data) => {
      await fetch(recurso, { type: 'POST', body: JSON.stringify(data) }).then(
        // eslint-disable-next-line comma-dangle
        (x) => x.json()
      );
    },
  };
})();

Users.listar();
