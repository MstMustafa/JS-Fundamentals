function arenaTier(input) {
  const gladiators = {};

  input.forEach(line => {
    if (line === 'Ave Cesar') {
      return;
    }

    if (line.includes(' -> ')) {

      const [gladiator, technique, skillStr] = line.split(' -> ');
      const skill = parseInt(skillStr, 10);

      if (!gladiators[gladiator]) {
        gladiators[gladiator] = { totalSkill: 0, techniques: {} };
      }

      const currentSkill = gladiators[gladiator].techniques[technique] || 0;
      if (skill > currentSkill) {
        gladiators[gladiator].techniques[technique] = skill;
        gladiators[gladiator].totalSkill += skill - currentSkill;
      }
    } else if (line.includes(' vs ')) {
      const [gladiator1, gladiator2] = line.split(' vs ');

      if (gladiators[gladiator1] && gladiators[gladiator2]) {
        let commonTechniques = Object.keys(gladiators[gladiator1].techniques)
          .filter(technique => technique in gladiators[gladiator2].techniques);

        if (commonTechniques.length > 0) {
          if (gladiators[gladiator1].totalSkill > gladiators[gladiator2].totalSkill) {
            delete gladiators[gladiator2];
          } else if (gladiators[gladiator1].totalSkill < gladiators[gladiator2].totalSkill) {
            delete gladiators[gladiator1];
          }
        }
      }
    }
  });

  Object.entries(gladiators)
    .sort((a, b) => b[1].totalSkill - a[1].totalSkill || a[0].localeCompare(b[0]))
    .forEach(([name, data]) => {
      console.log(`${name}: ${data.totalSkill} skill`);
      Object.entries(data.techniques)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(([technique, skill]) => {
          console.log(`- ${technique} <!> ${skill}`);
        });
    });
}
