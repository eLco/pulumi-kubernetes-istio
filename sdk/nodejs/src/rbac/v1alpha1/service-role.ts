// *** WARNING: this file was generated by the Pulumi Kubernetes Istio codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import { CustomResource, CustomResourceOptions, Inputs, Input, ID, Output } from '@pulumi/pulumi';
import { types } from '@pulumi/kubernetes';

import { input, output } from '../../types';


export class ServiceRole extends CustomResource {
    /** @internal */
    private static readonly __pulumiType = 'kubernetes:rbac.istio.io/v1alpha1:ServiceRole';

    /**
     * Standard object metadata. More info:
     * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    public readonly metadata: Output<types.output.meta.v1.ObjectMeta>;

    /**
     * Spec holds information about the request being evaluated
     */
    public readonly spec: Output<output.rbac.v1alpha1.ServiceRole>;

    public static get(name: string, id: Input<ID>, opts: CustomResourceOptions = {}): ServiceRole {
        return new ServiceRole(name, undefined, { ...opts, id });
    }

    /**
     * Returns true if the given object is an instance of DestinationRule.
     * This is designed to work even when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceRole {
        return obj != null && obj['__pulumiType'] === ServiceRole.__pulumiType;
    }

    /**
     * Create a rbac.v1alpha1.ServiceRole resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    // @TODO: Generate input types for args
    constructor(name: string, args: { metadata: types.input.meta.v1.ObjectMeta, spec: input.rbac.v1alpha1.ServiceRole }, opts: CustomResourceOptions = {}) {
        const inputs: Inputs = {
            apiVersion: 'rbac.istio.io/v1alpha1',
            kind: 'ServiceRole',
            metadata: args.metadata,
            spec: args.spec,
        };

        //if (!opts.version) {
        //    opts.version = getVersion();
        //}

        super(ServiceRole.__pulumiType, name, inputs, opts);
    }
}