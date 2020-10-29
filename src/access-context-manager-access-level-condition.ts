// https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AccessContextManagerAccessLevelConditionConfig extends TerraformMetaArguments {
  /** The name of the Access Level to add this condition to. */
  readonly accessLevel: string;
  /** A list of CIDR block IP subnetwork specification. May be IPv4
or IPv6.
Note that for a CIDR IP address block, the specified IP address
portion must be properly truncated (i.e. all the host bits must
be zero) or the input is considered malformed. For example,
"192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
is not. The originating IP of a request must be in one of the
listed subnets in order for this Condition to be true.
If empty, all IP addresses are allowed. */
  readonly ipSubnetworks?: string[];
  /** An allowed list of members (users, service accounts).
Using groups is not supported yet.

The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: 'user:{emailid}', 'serviceAccount:{emailid}' */
  readonly members?: string[];
  /** Whether to negate the Condition. If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false. */
  readonly negate?: boolean;
  /** The request must originate from one of the provided
countries/regions.
Format: A valid ISO 3166-1 alpha-2 code. */
  readonly regions?: string[];
  /** A list of other access levels defined in the same Policy,
referenced by resource name. Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name} */
  readonly requiredAccessLevels?: string[];
  /** device_policy block */
  readonly devicePolicy?: AccessContextManagerAccessLevelConditionDevicePolicy[];
  /** timeouts block */
  readonly timeouts?: AccessContextManagerAccessLevelConditionTimeouts;
}
export interface AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints {
  /** The minimum allowed OS version. If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1". */
  readonly minimumVersion?: string;
  /** The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS"] */
  readonly osType: string;
}
export interface AccessContextManagerAccessLevelConditionDevicePolicy {
  /** A list of allowed device management levels.
An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"] */
  readonly allowedDeviceManagementLevels?: string[];
  /** A list of allowed encryptions statuses.
An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"] */
  readonly allowedEncryptionStatuses?: string[];
  /** Whether the device needs to be approved by the customer admin. */
  readonly requireAdminApproval?: boolean;
  /** Whether the device needs to be corp owned. */
  readonly requireCorpOwned?: boolean;
  /** Whether or not screenlock is required for the DevicePolicy
to be true. Defaults to false. */
  readonly requireScreenLock?: boolean;
  /** os_constraints block */
  readonly osConstraints?: AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints[];
}
export interface AccessContextManagerAccessLevelConditionTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class AccessContextManagerAccessLevelCondition extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AccessContextManagerAccessLevelConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_access_level_condition',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessLevel = config.accessLevel;
    this._ipSubnetworks = config.ipSubnetworks;
    this._members = config.members;
    this._negate = config.negate;
    this._regions = config.regions;
    this._requiredAccessLevels = config.requiredAccessLevels;
    this._devicePolicy = config.devicePolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: false, required: true
  private _accessLevel: string;
  public get accessLevel() {
    return this._accessLevel;
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_subnetworks - computed: false, optional: true, required: false
  private _ipSubnetworks?: string[];
  public get ipSubnetworks() {
    return this._ipSubnetworks;
  }
  public set ipSubnetworks(value: string[] | undefined) {
    this._ipSubnetworks = value;
  }

  // members - computed: false, optional: true, required: false
  private _members?: string[];
  public get members() {
    return this._members;
  }
  public set members(value: string[] | undefined) {
    this._members = value;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean;
  public get negate() {
    return this._negate;
  }
  public set negate(value: boolean | undefined) {
    this._negate = value;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[];
  public get regions() {
    return this._regions;
  }
  public set regions(value: string[] | undefined) {
    this._regions = value;
  }

  // required_access_levels - computed: false, optional: true, required: false
  private _requiredAccessLevels?: string[];
  public get requiredAccessLevels() {
    return this._requiredAccessLevels;
  }
  public set requiredAccessLevels(value: string[] | undefined) {
    this._requiredAccessLevels = value;
  }

  // device_policy - computed: false, optional: true, required: false
  private _devicePolicy?: AccessContextManagerAccessLevelConditionDevicePolicy[];
  public get devicePolicy() {
    return this._devicePolicy;
  }
  public set devicePolicy(value: AccessContextManagerAccessLevelConditionDevicePolicy[] | undefined) {
    this._devicePolicy = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AccessContextManagerAccessLevelConditionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AccessContextManagerAccessLevelConditionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level: this._accessLevel,
      ip_subnetworks: this._ipSubnetworks,
      members: this._members,
      negate: this._negate,
      regions: this._regions,
      required_access_levels: this._requiredAccessLevels,
      device_policy: this._devicePolicy,
      timeouts: this._timeouts,
    };
  }
}
