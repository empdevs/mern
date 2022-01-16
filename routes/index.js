import  express  from "express";
import { getAllProducts, createProduct , getProductById , deleteProductById, updateProduct} from "../controllers/Products.js";

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', createProduct);
router.get('/:id', getProductById);
router.delete('/:id', deleteProductById);
router.patch('/:id', updateProduct);

export default router;