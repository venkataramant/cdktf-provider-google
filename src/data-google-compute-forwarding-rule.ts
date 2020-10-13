// https://www.terraform.io/docs/providers/google/r/data_google_compute_forwarding_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleComputeForwardingRuleConfig extends TerraformMetaArguments {
  /** Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name: string;
  readonly project?: string;
  /** A reference to the region where the regional forwarding rule resides.
This field is not applicable to global forwarding rules. */
  readonly region?: string;
}

// Resource

export class DataGoogleComputeForwardingRule extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleComputeForwardingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_forwarding_rule',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_ports - computed: true, optional: false, required: true
  public get allPorts() {
    return this.getBooleanAttribute('all_ports');
  }

  // allow_global_access - computed: true, optional: false, required: true
  public get allowGlobalAccess() {
    return this.getBooleanAttribute('allow_global_access');
  }

  // backend_service - computed: true, optional: false, required: true
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_protocol - computed: true, optional: false, required: true
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }

  // load_balancing_scheme - computed: true, optional: false, required: true
  public get loadBalancingScheme() {
    return this.getStringAttribute('load_balancing_scheme');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network - computed: true, optional: false, required: true
  public get network() {
    return this.getStringAttribute('network');
  }

  // network_tier - computed: true, optional: false, required: true
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }

  // port_range - computed: true, optional: false, required: true
  public get portRange() {
    return this.getStringAttribute('port_range');
  }

  // ports - computed: true, optional: false, required: true
  public get ports() {
    return this.getListAttribute('ports');
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // service_label - computed: true, optional: false, required: true
  public get serviceLabel() {
    return this.getStringAttribute('service_label');
  }

  // service_name - computed: true, optional: false, required: true
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // subnetwork - computed: true, optional: false, required: true
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }

  // target - computed: true, optional: false, required: true
  public get target() {
    return this.getStringAttribute('target');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      project: this._project,
      region: this._region,
    };
  }
}
