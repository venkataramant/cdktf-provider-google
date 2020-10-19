// https://www.terraform.io/docs/providers/google/r/bigtable_table_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BigtableTableIamBindingConfig extends TerraformMetaArguments {
  readonly instance: string;
  readonly members: string[];
  readonly project?: string;
  readonly role: string;
  readonly table: string;
  /** condition block */
  readonly condition?: BigtableTableIamBindingCondition[];
}
export interface BigtableTableIamBindingCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class BigtableTableIamBinding extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BigtableTableIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigtable_table_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instance = config.instance;
    this._members = config.members;
    this._project = config.project;
    this._role = config.role;
    this._table = config.table;
    this._condition = config.condition;
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

  // instance - computed: false, optional: false, required: true
  private _instance: string;
  public get instance() {
    return this._instance;
  }
  public set instance(value: string) {
    this._instance = value;
  }

  // members - computed: false, optional: false, required: true
  private _members: string[];
  public get members() {
    return this._members;
  }
  public set members(value: string[]) {
    this._members = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }

  // table - computed: false, optional: false, required: true
  private _table: string;
  public get table() {
    return this._table;
  }
  public set table(value: string) {
    this._table = value;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: BigtableTableIamBindingCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: BigtableTableIamBindingCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance: this._instance,
      members: this._members,
      project: this._project,
      role: this._role,
      table: this._table,
      condition: this._condition,
    };
  }
}