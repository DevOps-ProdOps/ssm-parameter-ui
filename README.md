# ssm-parameter-ui

[![Build Status](https://travis-ci.org/jSherz/ssm-parameter-ui.svg?branch=master)](https://travis-ci.org/jSherz/ssm-parameter-ui)
[![Coverage Status](https://coveralls.io/repos/github/jSherz/ssm-parameter-ui/badge.svg?branch=master)](https://coveralls.io/github/jSherz/ssm-parameter-ui?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/jSherz/ssm-parameter-ui/badge.svg)](https://snyk.io/test/github/jSherz}/ssm-parameter-ui)

This project is an attempt at making an alternative user interface for the [AWS
Systems Manager Parameter Store]. It is in no way affiliated with, endorsed by
or associated with Amazon or Amazon Web Services. Use it at your own risk. It's
recommended that you download the project, review the source code and then build
your own static copy to run locally. Alternatively, you can start using the UI
now on the [project's GitHub pages site].

[AWS Systems Manager Parameter Store]: https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-paramstore.html
[project's GitHub pages site]: https://jsherz.github.io/ssm-parameter-ui

**NB:** This is an extremely early stage project and thus much of the
functionality is in development, buggy or just plain wrong. You have been
warned.

## Getting started

Either clone the project and build it (see [developers-guide]) or use it at the
[project's GitHub pages site].

1. Navigate to the "Setup" page using the link in the nav bar. You will see an
   object that's passed directly into the AWS SDK and thus takes the options
   documented in the [SDK documentation].
2. Adapt the default settings or replace them with different credentials (e.g.
   after assuming an IAM role) and click "Save".
3. Navigate to the main UI with the "Home" link in the nav bar.

[SDK documentation]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html
[developers-guide]: #developers-guide

## Developer's guide

Run the application with `yarn start`. Test it with `yarn test`, make a
production build with `yarn build` and please normalise the formatting with
`yarn prettify` and check the lint rules pass (`yarn lint`) before making a PR.
