// https://www.terraform.io/docs/providers/google/r/compute_autoscaler.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeAutoscalerConfig extends TerraformMetaArguments {
  /** An optional description of this resource. */
  readonly description?: string;
  /** Name of the resource. The name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name: string;
  readonly project?: string;
  /** URL of the managed instance group that this autoscaler will scale. */
  readonly target: string;
  /** URL of the zone where the instance group resides. */
  readonly zone?: string;
  /** autoscaling_policy block */
  readonly autoscalingPolicy: ComputeAutoscalerAutoscalingPolicy[];
  /** timeouts block */
  readonly timeouts?: ComputeAutoscalerTimeouts;
}
export interface ComputeAutoscalerAutoscalingPolicyCpuUtilization {
  /** The target CPU utilization that the autoscaler should maintain.
Must be a float value in the range (0, 1]. If not specified, the
default is 0.6.

If the CPU level is below the target utilization, the autoscaler
scales down the number of instances until it reaches the minimum
number of instances you specified or until the average CPU of
your instances reaches the target utilization.

If the average CPU is above the target utilization, the autoscaler
scales up until it reaches the maximum number of instances you
specified or until the average utilization reaches the target
utilization. */
  readonly target: number;
}
export interface ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization {
  /** Fraction of backend capacity utilization (set in HTTP(s) load
balancing configuration) that autoscaler should maintain. Must
be a positive float value. If not defined, the default is 0.8. */
  readonly target: number;
}
export interface ComputeAutoscalerAutoscalingPolicyMetric {
  /** The identifier (type) of the Stackdriver Monitoring metric.
The metric cannot have negative values.

The metric must have a value type of INT64 or DOUBLE. */
  readonly name: string;
  /** The target value of the metric that autoscaler should
maintain. This must be a positive value. A utilization
metric scales number of virtual machines handling requests
to increase or decrease proportionally to the metric.

For example, a good metric to use as a utilizationTarget is
www.googleapis.com/compute/instance/network/received_bytes_count.
The autoscaler will work to keep this value constant for each
of the instances. */
  readonly target?: number;
  /** Defines how target utilization value is expressed for a
Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"] */
  readonly type?: string;
}
export interface ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas {
  /** Specifies a fixed number of VM instances. This must be a positive
integer. */
  readonly fixed?: number;
  /** Specifies a percentage of instances between 0 to 100%, inclusive.
For example, specify 80 for 80%. */
  readonly percent?: number;
}
export interface ComputeAutoscalerAutoscalingPolicyScaleInControl {
  /** How long back autoscaling should look when computing recommendations
to include directives regarding slower scale down, as described above. */
  readonly timeWindowSec?: number;
  /** max_scaled_in_replicas block */
  readonly maxScaledInReplicas?: ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas[];
}
export interface ComputeAutoscalerAutoscalingPolicy {
  /** The number of seconds that the autoscaler should wait before it
starts collecting information from a new instance. This prevents
the autoscaler from collecting information when the instance is
initializing, during which the collected usage would not be
reliable. The default time autoscaler waits is 60 seconds.

Virtual machine initialization times might vary because of
numerous factors. We recommend that you test how long an
instance may take to initialize. To do this, create an instance
and time the startup process. */
  readonly cooldownPeriod?: number;
  /** The maximum number of instances that the autoscaler can scale up
to. This is required when creating or updating an autoscaler. The
maximum number of replicas should not be lower than minimal number
of replicas. */
  readonly maxReplicas: number;
  /** The minimum number of replicas that the autoscaler can scale down
to. This cannot be less than 0. If not provided, autoscaler will
choose a default value depending on maximum number of instances
allowed. */
  readonly minReplicas: number;
  /** Defines operating mode for this policy. Default value: "ON" Possible values: ["OFF", "ONLY_UP", "ON"] */
  readonly mode?: string;
  /** cpu_utilization block */
  readonly cpuUtilization?: ComputeAutoscalerAutoscalingPolicyCpuUtilization[];
  /** load_balancing_utilization block */
  readonly loadBalancingUtilization?: ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization[];
  /** metric block */
  readonly metric?: ComputeAutoscalerAutoscalingPolicyMetric[];
  /** scale_in_control block */
  readonly scaleInControl?: ComputeAutoscalerAutoscalingPolicyScaleInControl[];
}
export interface ComputeAutoscalerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeAutoscaler extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeAutoscalerConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_autoscaler',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._project = config.project;
    this._target = config.target;
    this._zone = config.zone;
    this._autoscalingPolicy = config.autoscalingPolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // target - computed: false, optional: false, required: true
  private _target: string;
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone
  }

  // autoscaling_policy - computed: false, optional: false, required: true
  private _autoscalingPolicy: ComputeAutoscalerAutoscalingPolicy[];
  public get autoscalingPolicy() {
    return this.interpolationForAttribute('autoscaling_policy') as any;
  }
  public set autoscalingPolicy(value: ComputeAutoscalerAutoscalingPolicy[]) {
    this._autoscalingPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingPolicyInput() {
    return this._autoscalingPolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeAutoscalerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeAutoscalerTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      project: this._project,
      target: this._target,
      zone: this._zone,
      autoscaling_policy: this._autoscalingPolicy,
      timeouts: this._timeouts,
    };
  }
}
