/*
  This file acts as our interface to the Beacon REST API.
*/

import * as job from './BeaconClient/job.js';
import * as asset from './BeaconClient/asset.js';
import * as nitc from './BeaconClient/nitc.js';
import * as operationslog from './BeaconClient/operationslog.js';
import * as resources from './BeaconClient/resources.js';
import * as team from './BeaconClient/team.js';
import * as unit from './BeaconClient/unit.js';

export default { job, asset, nitc, operationslog, resources, team, unit };
