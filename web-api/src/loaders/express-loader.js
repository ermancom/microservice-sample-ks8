import { apiLoader } from "../routes";
import bodyParser from "body-parser";
import cors from "cors";
//import helmet from "helmet";

export const expressLoader = async (app) => {
  //app.use(helmet());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use("/v1", apiLoader());
};
