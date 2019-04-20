import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

export * from "./api";
export { default as client } from "./client";
export { default as config } from "../aws-exports";
