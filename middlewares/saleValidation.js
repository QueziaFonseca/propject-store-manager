const handleError = (status, message) => ({
  status, message,
});

const errorhandled = (body) => {
  body.forEach((element) => {
    if (!element.productId) {
      throw handleError(400, '"productId" is required');
    }
  
    if (!element.quantity) {
      throw handleError(400, '"quantity" is required');
    }
  
    if (element.quantity <= 0) {
      throw handleError(422, '"quantity" must be greater than or equal to 1');
    }  
  });
};

const saleValidation = (req, res, next) => {
  try {
    errorhandled(req.body);
    next();
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = saleValidation;