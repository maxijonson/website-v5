export interface Experience {
    company: string;
    logo: string;
    from: Date;
    position: string;
    companyDescription?: string | null;
    to?: Date;
    jobPoints?: string[];
}
