import { Weakness } from "@actor/data/iwr.ts";
import { WeaknessType } from "@actor/types.ts";
import type { StrictArrayField } from "@system/schema-data-fields.ts";
import { ResolvableValueField } from "../data.ts";
import { IWRException, IWRExceptionField, IWRRuleElement, IWRRuleSchema } from "./base.ts";
/** @category RuleElement */
declare class WeaknessRuleElement extends IWRRuleElement<WeaknessRuleSchema> {
    static defineSchema(): WeaknessRuleSchema;
    static get dictionary(): Record<WeaknessType, string>;
    get property(): Weakness[];
    getIWR(value: number): Weakness[];
}
interface WeaknessRuleElement extends IWRRuleElement<WeaknessRuleSchema>, ModelPropsFromSchema<WeaknessRuleSchema> {
    type: WeaknessType[];
    exceptions: IWRException<WeaknessType>[];
}
type WeaknessRuleSchema = Omit<IWRRuleSchema, "exceptions"> & {
    value: ResolvableValueField<true, false, false>;
    exceptions: StrictArrayField<IWRExceptionField>;
};
export { WeaknessRuleElement };
