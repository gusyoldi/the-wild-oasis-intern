import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { ignores: ["dist/**", "node_modules/**"] },
  { settings: { react: { version: "detect" } } },
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        localStorage: "readonly",
        console: "readonly",
        File: "readonly",
        FormData: "readonly",
        URL: "readonly",
        Date: "readonly",
        Intl: "readonly",
        Number: "readonly",
        Math: "readonly",
        Error: "readonly",
        JSON: "readonly",
        String: "readonly",
        Boolean: "readonly",
        undefined: "readonly",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",
    },
  },
  {
    files: ["vite.config.*", "eslint.config.*"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        process: "readonly",
        __dirname: "readonly",
        module: "readonly",
        require: "readonly",
      },
    },
  },
];
