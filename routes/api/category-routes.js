const router = require('express').Router();
const { response } = require('express');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: Product
  })
    .then(data => {
      res.json(data)
    })

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({where: {id: req.params.id}})
    .then(data => {
      res.json(data)
    })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(new_category => {
    res.json(new_category)
  })

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    req.body,
    {
      where: {id: req.params.id}
    }
    )
    .then(update => {
      res.send('updated category w specified id')
    })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: { id: req.params.id }
  })
  .then(() => res.send('category has been deleted'));
});

module.exports = router;
