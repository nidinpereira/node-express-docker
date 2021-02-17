/**
 * External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * Server Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const HOST = process.env.HOST as string;

const app = express();



/**
 *  Server Endpoints
 */
app.get('/', (req, res) => {
    res.send('Hello World');
});


/**
 *  Server Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */
app.listen(PORT, HOST, () => {
    console.log(`Listening on port ${PORT}`);
});
