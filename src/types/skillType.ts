export interface Skill {
  date: string;
  character_class: string;
  character_skill_grade: string;
  character_skill: [
    {
      skill_name: string;
      skill_description: string;
      skill_level: number;
      skill_effect: string;
      skill_icon: string;
    }
  ];
}
