import mongoose,{Schema, Document} from "mongoose";

export type ProjectType = Document & { //TS
    projectName: string;
    clientName: string;
    projectDescription: string;
}
const projectSchema: Schema = new Schema<ProjectType>({ //moongose
    projectName: {
        type: String,
        required: true,
        trim: true, //elimina espacios
        //unique: true unico
    },
    clientName: {
        type: String,
        required: true,
        trim: true 
    },
    projectDescription: {
        type: String,
        required: true,
        trim: true
    }
});

const Project = mongoose.model<ProjectType>('Project',projectSchema); //nombre de la coleccion
export default Project; //exportamos el modelo

