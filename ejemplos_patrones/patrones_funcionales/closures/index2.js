/* eslint-disable no-undef */
// const f = (x) => () => console.log(`Rayos ${x}!`);

// f('wladimir')();

// Example with mongoose and clousures
const auditProps = {
  createdAt: { default: new Date() },
  updatedAt: { default: new Date() },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  updatedBy: { type: Schema.Types.ObjectId, ref: 'User' },
};

// eslint-disable-next-line arrow-body-style
const Model = (defaultProps) => {
  return (name, props) => {
    const schema = moongose.Schema({
      ...defaultProps,
      ...props,
    });

    return moongose.Model(name, schema);
  };
};

/*
 Exporta la funcion withAudit que va a tener por defecto los datos
 de auditProps
*/
// eslint-disable-next-line import/prefer-default-export
export const withAudit = Model(auditProps);

// ... en otro archivo
withAudit('Product', {
  name: String,
  description: String,
});
