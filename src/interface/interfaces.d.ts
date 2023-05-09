interface IJobType {
    position: string;
    description: string;
    periodOfStaying: string;
}

interface IProject {
    title: string;
    authors: string | [];
    description: string;
    stacks: string[];
    deployLink: string;
    imagem: string | StaticImageData;
}