// *** WARNING: this file was generated by the Pulumi Kubernetes Istio codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import { CustomResource, CustomResourceOptions, Inputs, Input, ID, Output } from '@pulumi/pulumi';
import { types } from '@pulumi/kubernetes';

import { input, output } from '../../types';


export class Handler extends CustomResource {
    /** @internal */
    private static readonly __pulumiType = 'kubernetes:policy.istio.io/v1beta1:Handler';

    /**
     * Standard object metadata. More info:
     * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    public readonly metadata: Output<types.output.meta.v1.ObjectMeta>;

    /**
     * Spec holds information about the request being evaluated
     */
    public readonly spec: Output<output.policy.v1beta1.Handler>;

    public static get(name: string, id: Input<ID>, opts: CustomResourceOptions = {}): Handler {
        return new Handler(name, undefined, { ...opts, id });
    }

    /**
     * Returns true if the given object is an instance of DestinationRule.
     * This is designed to work even when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Handler {
        return obj != null && obj['__pulumiType'] === Handler.__pulumiType;
    }

    /**
     * Create a policy.v1beta1.Handler resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    // @TODO: Generate input types for args
    constructor(name: string, args: { metadata: types.input.meta.v1.ObjectMeta, spec: input.policy.v1beta1.Handler }, opts: CustomResourceOptions = {}) {
        const inputs: Inputs = {
            apiVersion: 'policy.istio.io/v1beta1',
            kind: 'Handler',
            metadata: args.metadata,
            spec: args.spec,
        };

        //if (!opts.version) {
        //    opts.version = getVersion();
        //}

        super(Handler.__pulumiType, name, inputs, opts);
    }
}