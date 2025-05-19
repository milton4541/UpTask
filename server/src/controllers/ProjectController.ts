import { Request, Response } from 'express';
import Project from '../models/Project';

export class ProjectController {
    static createProject = async (req: Request, res: Response) => {
         const project = new Project(req.body);
        try {
            await project.save();
            res.send('Project created');
        } catch (error) {
            res.status(500).send('Error creating project');
        }
    }
    static getAllProjects = async (req: Request, res: Response) => {
        try {
            const projects = await Project.find({});
            res.json(projects);
        } catch (error) {
            res.status(500).send('Error fetching projects');
        }
    }
    static getProjectById = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const project = await Project.findById(id);
            if (!project) {
                const error = new Error('Project not found');
                res.status(404).json({ error: error.message });
            }
            res.json(project);
        } catch (error) {
            res.status(500).send('Error fetching projects');
        }
    }

}