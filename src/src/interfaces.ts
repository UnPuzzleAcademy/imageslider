interface FormDefinition{
    id:string;
    elements: FormElement[];
    onSubmit: (data:any)=>void;
}

type FormElement = Heading | SubHeading | LinkElement | Input | Button | Group | Section;

type Heading = {
    id: string;
    text:string;
}

type SubHeading = {
    id:string;
    text:string
}

type LinkElement = {
    id:string;
    label:string;
    href:string;
}

type Input = {
    id:string;
    type:string;
    name:string;
    label:string;
    placeholder:string;
}

type Button = {
    id:string;
    label:string;
}

type Group = {
    id:string;
    input:Input;
    button:Button;
}

type Section = {
    id:string;
    elements:FormElement[]
}

export type {FormDefinition, FormElement, Heading, SubHeading, LinkElement, Input, Button, Group, Section};