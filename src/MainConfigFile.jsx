const config = [
    {
        type: "text",
        name: "text",
        value: "",
        label: "Text Field",
        placeholder: "Enter your Text",
        required: false,
        pattern: "^[A-Za-z0-9_]+$", // Alphanumeric with underscores
        autocomplete: "text",
    },
    {
        type: "email",
        name: "email",
        value: "",
        label: "Email Address",
        placeholder: "Enter your email address",
        required: false,
        autocomplete: "email",
    },
    {
        type: "password",
        name: "password",
        value: "",
        label: "Password",
        placeholder: "Enter your password",
        required: false,
        minlength: 8,
        pattern: "(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}", // Minimum 8 characters, at least one letter and one number
        autocomplete: "new-password",
    },
    {
        type: "number",
        name: "age",
        value: "",
        label: "Age",
        placeholder: "Enter your age",
        required: false,
        min: 0,
        max: 120,
        step: 1,
    },
    {
        type: "date",
        name: "birthdate",
        value: "",
        label: "Date of Birth",
        placeholder: "Select your birthdate",
        required: false,
        min: "1900-01-01",
        max: "2023-12-31",
    },
    {
        type: "tel",
        name: "phone",
        value: "",
        label: "Phone Number",
        placeholder: "Enter your phone number",
        required: false,
        pattern: "\\d{10}", // 10-digit number
        autocomplete: "tel",
    },
    {
        type: "url",
        name: "website",
        value: "",
        label: "Website",
        placeholder: "Enter your website URL",
        required: false,
        pattern: "https?://.*", // Must start with http:// or https://
        autocomplete: "url",
    },
    {
        type: "file",
        name: "fileUpload",
        value: "",
        label: "Upload File",
        placeholder: "",
        required: false,
        accept: "image/*", // Accept only image files
        multiple: false,
    },
    {
        type: "checkbox",
        name: "acceptTerms",
        value: "yes",
        label: "I accept the terms and conditions",
        placeholder: "",
        required: false,
        checked: false, // Default unchecked
    },
    {
        type: "radio",
        label: "Select your favorite option",
        required: true,
        defaultSelected: "option1", // Indicates which option is selected by default
        options: [
          { value: "option1", text: "Option 1" },
          { value: "option2", text: "Option 2" }
        ]
      },
    {
        type: "range",
        name: "satisfaction",
        value: "50",
        label: "Satisfaction Level",
        placeholder: "",
        required: false,
        min: 0,
        max: 100,
        step: 1,
    },
    {
        type: "textarea",
        name: "comments",
        value: "",
        label: "Comments",
        placeholder: "Enter your comments here",
        required: false,
        maxlength: 500,
        rows: 5,
        cols: 30,
    },
    {
        type: "color",
        name: "favoriteColor",
        value: "#000000",
        label: "Favorite Color",
        placeholder: "",
        required: false,
    },
    {
        type: "search",
        name: "searchQuery",
        value: "",
        label: "Search",
        placeholder: "Search here",
        required: false,
    },
    {
        type: "hidden",
        name: "userID",
        value: "12345",
        label: "Hidden Field",
        placeholder: "",
        required: false,
    },
    {
        type: "datetime-local",
        name: "appointment",
        value: "",
        label: "Appointment Date & Time",
        placeholder: "",
        required: false,
        min: "2023-01-01T00:00",
        max: "2024-12-31T23:59",
    },
    {
        type: "month",
        name: "birthMonth",
        value: "",
        label: "Birth Month",
        placeholder: "",
        required: false,
    },
    {
        type: "week",
        name: "workWeek",
        value: "",
        label: "Preferred Work Week",
        placeholder: "",
        required: false,
    },
    {
        type: "time",
        name: "preferredTime",
        value: "",
        label: "Preferred Time",
        placeholder: "",
        required: false,
    },
    {
        type: "select",
        name: "country",
        value: "",
        label: "Country",
        placeholder: "",
        required: false,
        options: [
            { text: "United States", value: "us" },
            { text: "Canada", value: "ca" },
            { text: "United Kingdom", value: "uk" },
            { text: "India", value: "in" },
            { text: "Australia", value: "au" },
        ],
    },
    {
        type: "multiple-checkbox", // Type of element
        label: "Subscribe to Newsletter", // Label for the checkbox
        required: true, // Checkbox is required
        defaultChecked: false, // The checkbox is not checked by default
        options: [ // Options for the checkbox (useful for grouped checkboxes)
          { value: "yes", text: "Yes, I want to receive newsletters" },
          { value: "no", text: "No, I do not want to receive newsletters" },
        ],
        description: "This checkbox allows the user to subscribe or unsubscribe from the newsletter.", // Optional description
    },
];

export default config;
