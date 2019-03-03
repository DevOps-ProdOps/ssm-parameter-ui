import { SSM } from "aws-sdk";
import { treeParameters } from "./parameters";

const QUERY_RESULT: SSM.ParameterList = [
  {
    Name: "/services/example-key.json",
    Type: "String",
    Value: '{ "key": "value" }',
    Version: 1,
    LastModifiedDate: new Date("2019-03-02T17:36:11.026Z"),
    ARN:
      "arn:aws:ssm:eu-west-1:000000000001:parameter/services/example-key.json",
  },
  {
    Name: "/services/main",
    Type: "String",
    Value: "hello",
    Version: 1,
    LastModifiedDate: new Date("2019-03-03T00:07:15.417Z"),
    ARN: "arn:aws:ssm:eu-west-1:000000000001:parameter/services/main",
  },
  {
    Name: "/services/main/primary/foo/test.json",
    Type: "String",
    Value: "test",
    Version: 1,
    LastModifiedDate: new Date("2019-03-02T17:36:30.879Z"),
    ARN:
      "arn:aws:ssm:eu-west-1:000000000001:parameter/services/main/primary/foo/test.json",
  },
  {
    Name: "/services/main/secure-db-pass",
    Type: "SecureString",
    Value: "foobar",
    Version: 1,
    LastModifiedDate: new Date("2019-03-02T17:36:51.047Z"),
    ARN:
      "arn:aws:ssm:eu-west-1:000000000001:parameter/services/main/secure-db-pass",
  },
  {
    Name: "root-secure-string",
    Type: "SecureString",
    Value: "Test12345",
    Version: 1,
    LastModifiedDate: new Date("2019-03-02T17:35:53.257Z"),
    ARN: "arn:aws:ssm:eu-west-1:000000000001:parameter/root-secure-string",
  },
  {
    Name: "root-string-param",
    Type: "String",
    Value: "test",
    Version: 1,
    LastModifiedDate: new Date("2019-03-02T17:35:25.119Z"),
    ARN: "arn:aws:ssm:eu-west-1:000000000001:parameter/root-string-param",
  },
  {
    Name: "root-string-param2",
    Type: "String",
    Value: "test 12345",
    Version: 1,
    LastModifiedDate: new Date("2019-03-02T17:35:39.853Z"),
    ARN: "arn:aws:ssm:eu-west-1:000000000001:parameter/root-string-param2",
  },
];

describe("parameters", () => {
  describe("treeParameters", () => {
    it("", () => {
      expect(treeParameters(QUERY_RESULT)).toMatchSnapshot();
    });
  });
});
