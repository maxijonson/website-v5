export interface Skill {
    name: string;
    proficiency: number;
    logo: string;
}

export interface SkillGroup {
    name: string;
    skills: Skill[];
}
