// https://www.terraform.io/docs/providers/google/r/compute_image_iam_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeImageIamPolicyConfig extends TerraformMetaArguments {
  readonly image: string;
  readonly policyData: string;
  readonly project?: string;
}

// Resource

export class ComputeImageIamPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeImageIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_image_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._image = config.image;
    this._policyData = config.policyData;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image - computed: false, optional: false, required: true
  private _image: string;
  public get image() {
    return this._image;
  }
  public set image(value: string) {
    this._image = value;
  }

  // policy_data - computed: false, optional: false, required: true
  private _policyData: string;
  public get policyData() {
    return this._policyData;
  }
  public set policyData(value: string) {
    this._policyData = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      image: this._image,
      policy_data: this._policyData,
      project: this._project,
    };
  }
}