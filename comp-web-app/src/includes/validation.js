import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minValue,
  max_value as maxValue,
  confirmed,
  not_one_of as excluded,
} from "@vee-validate/rules/";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("requiredtos", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alphaSpaces", alphaSpaces);
    defineRule("email", email);
    defineRule("minValue", minValue);
    defineRule("maxValue", maxValue);
    defineRule("confirmed", confirmed);
    defineRule("excluded", excluded);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is requiered`,
          min: `The field ${ctx.field} is too short`,
          max: `The field ${ctx.field} is long`,
          alpha_space: `The field ${ctx.field} may only alphabetical characters`,
          email: `The field ${ctx.field} must be a valid email`,
          max_value: `The field ${ctx.field} is too low`,
          min_value: `The field ${ctx.field} is too high`,
          excluded: `The field ${ctx.field} couldn't selected`,
          confirmed: `The field ${ctx.field} isn't similar`,
          requiredtos: `You have to accept the Terms of Service`,
        };
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`;

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
