import { FormControl, Input, FormLabel } from "@chakra-ui/react";

interface Props {
  label: string;
  value: string | number;
  required?: boolean;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  onTextChange?: (value: string) => void;
  onNumberChange?: (value: number) => void;
  isDisabled?: boolean;
}

const LabelledInput = ({
  label,
  value,
  onTextChange,
  onNumberChange,
  type = "text",
  placeholder,
  required = false,
  isDisabled = false,
}: Props) => {
  return (
    <FormControl _focus={{ outlineColor: "primary.700" }}>
      <FormLabel color="primary.600" mb={0}>
        {label}
      </FormLabel>
      <Input
        isDisabled={isDisabled}
        name={label}
        borderRadius="xl"
        bg="primary.100"
        color="primary.800"
        _hover={{ borderColor: "primary.200" }}
        _focus={{ borderColor: "primary.200" }}
        _active={{ borderColor: "primary.200" }}
        _placeholder={{ color: "primary.400" }}
        variant="filled"
        isRequired={required}
        placeholder={placeholder ? placeholder : label}
        type={type}
        onChange={(e) =>
          type === "number"
            ? onNumberChange && onNumberChange(parseFloat(e.target.value || ""))
            : onTextChange && onTextChange(e.target.value)
        }
        value={value}
      />
    </FormControl>
  );
};

export default LabelledInput;
