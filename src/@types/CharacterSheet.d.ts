declare type CharacterSheet = {
  appearence: {
    agr: string
    eyesColor: string
    hairColor: string
    height: string
    imageInput: string
    skinColor: string
    weight: string
  }

  attributes: {
    charisma: string
    charismaAmplifier: string
    constitution: string
    constitutionAmplifier: string
    dexterity: string
    dexterityAmplifier: string
    intelligence: string
    intelligenceAmplifier: string
    strength: string
    strengthAmplifier: string
    wisdom: string
    wisdomAmplifier: string
  }

  attributesSummary: {
    classArmor: string
    hpInfos: { 
      hp: string
      totalHp: string
      hpDices: {
        hpDiceAmount: string
        hpDiceSize: string
      }
    }
    iniciative: string
    speed: string
  }

  generalAmplifiers: {
    proficiencyBonus: string
    savingThrows: {
      charisma: string
      charismaCheckBox: boolean
      constitution: string
      constitutionCheckBox: boolean
      dexterity: string
      dexterityCheckBox: boolean
      intelligence: string
      intelligenceCheckBox: boolean
      strength: string
      strengthCheckBox: boolean
      wisdom: string
      wisdomCheckBox: boolean
    }
    skills: {
      acrobatics: string
      acrobaticsCheckBox: boolean
      animalHandling: string
      animalHandlingCheckBox: boolean
      arcana: string
      arcanaCheckBox: boolean
      athletics: string
      athleticsCheckBox: boolean
      deception: string
      deceptionCheckBox: boolean
      history: string
      historyCheckBox: boolean
      insight: string
      insightCheckBox: boolean
      intimidation: string
      intimidationCheckBox: boolean
      investigation: string
      investigationCheckBox: boolean
      medicine: string
      medicineCheckBox: boolean
      nature: string
      natureCheckBox: boolean
      perception: string
      perceptionCheckBox: boolean
      performace: string
      performaceCheckBox: boolean
      persuasion: string
      persuasionCheckBox: boolean
      religion: string
      religionCheckBox: boolean
      sleightOfHand: string
      sleightOfHandCheckBox: boolean
      stealth: string
      stealthCheckBox: boolean
      survival: string
      survivalCheckBox: boolean
    }
  }

  infos: {
    alignment: string
    background: string
    class: string
    experiencePoints: string
    history: string
    name: string
    playerName: string
    race: string
  }

  inventory: {
    languagesAndOtherSkills: string
    equipments: {
      equipmentsText: string
    }
    money: {
      pc: string
      pe: string
      pl: string
      po: string
      pp: string
    }
    weaponsAndAttacks: {
      attacksDescriptionText: string
      weapon1: {
        weapon1Amplifiers: string
        weapon1Dices: string
        weapon1Name: string
      }
      weapon2: {
        weapon2Amplifiers: string
        weapon2Dices: string
        weapon2Name: string
      }
      weapon3: {
        weapon3Amplifiers: string
        weapon3Dices: string
        weapon3Name: string
      }
    }
  }

  personality: {
    bonds: string
    characteristicsAndTalents: string
    flaws: string
    ideals: string
    personalityTraits: string
  }

  spells: {
    conjurationAttribute: string
    spellsCooldown: string
    spellsModifier: string
    level0: {
      line1: {
        line1CheckboxLevel0: boolean
        line1SpellNameLevel0: string
      }
      line2: {
        line2CheckboxLevel0: boolean
        line2SpellNameLevel0: string
      }
      line3: {
        line3CheckboxLevel0: boolean
        line3SpellNameLevel0: string
      }
      line4: {
        line4CheckboxLevel0: boolean
        line4SpellNameLevel0: string
      }
      line5: {
        line5CheckboxLevel0: boolean
        line5SpellNameLevel0: string
      }
      line6: {
        line6CheckboxLevel0: boolean
        line6SpellNameLevel0: string
      }
      line7: {
        line7CheckboxLevel0: boolean
        line7SpellNameLevel0: string
      }
      line8: {
        line8CheckboxLevel0: boolean
        line8SpellNameLevel0: string
      }
      line9: {
        line9CheckboxLevel0: boolean
        line9SpellNameLevel0: string
      }
      line10: {
        line10CheckboxLevel0: boolean
        line10SpellNameLevel0: string
      }
      line11: {
        line11CheckboxLevel0: boolean
        line11SpellNameLevel0: string
      }
      line12: {
        line12CheckboxLevel0: boolean
        line12SpellNameLevel0: string
      }
    }
    level1: {
      totalSpaceLevel1: string
      usingSpaceLevel1: string
      line1: {
        line1CheckboxLevel0: boolean
        line1SpellNameLevel0: string
      }
      line2: {
        line2CheckboxLevel0: boolean
        line2SpellNameLevel0: string
      }
      line3: {
        line3CheckboxLevel0: boolean
        line3SpellNameLevel0: string
      }
      line4: {
        line4CheckboxLevel0: boolean
        line4SpellNameLevel0: string
      }
      line5: {
        line5CheckboxLevel0: boolean
        line5SpellNameLevel0: string
      }
      line6: {
        line6CheckboxLevel0: boolean
        line6SpellNameLevel0: string
      }
      line7: {
        line7CheckboxLevel0: boolean
        line7SpellNameLevel0: string
      }
      line8: {
        line8CheckboxLevel0: boolean
        line8SpellNameLevel0: string
      }
      line9: {
        line9CheckboxLevel0: boolean
        line9SpellNameLevel0: string
      }
      line10: {
        line10CheckboxLevel0: boolean
        line10SpellNameLevel0: string
      }
      line11: {
        line11CheckboxLevel0: boolean
        line11SpellNameLevel0: string
      }
      line12: {
        line12CheckboxLevel0: boolean
        line12SpellNameLevel0: string
      }
    }
    level2: {
      totalSpaceLevel2: string
      usingSpaceLevel2: string
      line1: {
        line1CheckboxLevel0: boolean
        line1SpellNameLevel0: string
      }
      line2: {
        line2CheckboxLevel0: boolean
        line2SpellNameLevel0: string
      }
      line3: {
        line3CheckboxLevel0: boolean
        line3SpellNameLevel0: string
      }
      line4: {
        line4CheckboxLevel0: boolean
        line4SpellNameLevel0: string
      }
      line5: {
        line5CheckboxLevel0: boolean
        line5SpellNameLevel0: string
      }
      line6: {
        line6CheckboxLevel0: boolean
        line6SpellNameLevel0: string
      }
      line7: {
        line7CheckboxLevel0: boolean
        line7SpellNameLevel0: string
      }
      line8: {
        line8CheckboxLevel0: boolean
        line8SpellNameLevel0: string
      }
      line9: {
        line9CheckboxLevel0: boolean
        line9SpellNameLevel0: string
      }
      line10: {
        line10CheckboxLevel0: boolean
        line10SpellNameLevel0: string
      }
      line11: {
        line11CheckboxLevel0: boolean
        line11SpellNameLevel0: string
      }
      line12: {
        line12CheckboxLevel0: boolean
        line12SpellNameLevel0: string
      }
    }
    level3: {
      totalSpaceLevel3: string
      usingSpaceLevel3: string
      line1: {
        line1CheckboxLevel0: boolean
        line1SpellNameLevel0: string
      }
      line2: {
        line2CheckboxLevel0: boolean
        line2SpellNameLevel0: string
      }
      line3: {
        line3CheckboxLevel0: boolean
        line3SpellNameLevel0: string
      }
      line4: {
        line4CheckboxLevel0: boolean
        line4SpellNameLevel0: string
      }
      line5: {
        line5CheckboxLevel0: boolean
        line5SpellNameLevel0: string
      }
      line6: {
        line6CheckboxLevel0: boolean
        line6SpellNameLevel0: string
      }
      line7: {
        line7CheckboxLevel0: boolean
        line7SpellNameLevel0: string
      }
      line8: {
        line8CheckboxLevel0: boolean
        line8SpellNameLevel0: string
      }
      line9: {
        line9CheckboxLevel0: boolean
        line9SpellNameLevel0: string
      }
      line10: {
        line10CheckboxLevel0: boolean
        line10SpellNameLevel0: string
      }
      line11: {
        line11CheckboxLevel0: boolean
        line11SpellNameLevel0: string
      }
      line12: {
        line12CheckboxLevel0: boolean
        line12SpellNameLevel0: string
      }
    }
    level4: {
      totalSpaceLevel4: string
      usingSpaceLevel4: string
      line1: {
        line1CheckboxLevel0: boolean
        line1SpellNameLevel0: string
      }
      line2: {
        line2CheckboxLevel0: boolean
        line2SpellNameLevel0: string
      }
      line3: {
        line3CheckboxLevel0: boolean
        line3SpellNameLevel0: string
      }
      line4: {
        line4CheckboxLevel0: boolean
        line4SpellNameLevel0: string
      }
      line5: {
        line5CheckboxLevel0: boolean
        line5SpellNameLevel0: string
      }
      line6: {
        line6CheckboxLevel0: boolean
        line6SpellNameLevel0: string
      }
      line7: {
        line7CheckboxLevel0: boolean
        line7SpellNameLevel0: string
      }
      line8: {
        line8CheckboxLevel0: boolean
        line8SpellNameLevel0: string
      }
      line9: {
        line9CheckboxLevel0: boolean
        line9SpellNameLevel0: string
      }
      line10: {
        line10CheckboxLevel0: boolean
        line10SpellNameLevel0: string
      }
      line11: {
        line11CheckboxLevel0: boolean
        line11SpellNameLevel0: string
      }
      line12: {
        line12CheckboxLevel0: boolean
        line12SpellNameLevel0: string
      }
    }
    level5: {
      totalSpaceLevel5: string
      usingSpaceLevel5: string
      line1: {
        line1CheckboxLevel0: boolean
        line1SpellNameLevel0: string
      }
      line2: {
        line2CheckboxLevel0: boolean
        line2SpellNameLevel0: string
      }
      line3: {
        line3CheckboxLevel0: boolean
        line3SpellNameLevel0: string
      }
      line4: {
        line4CheckboxLevel0: boolean
        line4SpellNameLevel0: string
      }
      line5: {
        line5CheckboxLevel0: boolean
        line5SpellNameLevel0: string
      }
      line6: {
        line6CheckboxLevel0: boolean
        line6SpellNameLevel0: string
      }
      line7: {
        line7CheckboxLevel0: boolean
        line7SpellNameLevel0: string
      }
      line8: {
        line8CheckboxLevel0: boolean
        line8SpellNameLevel0: string
      }
      line9: {
        line9CheckboxLevel0: boolean
        line9SpellNameLevel0: string
      }
      line10: {
        line10CheckboxLevel0: boolean
        line10SpellNameLevel0: string
      }
      line11: {
        line11CheckboxLevel0: boolean
        line11SpellNameLevel0: string
      }
      line12: {
        line12CheckboxLevel0: boolean
        line12SpellNameLevel0: string
      }
    }
    level6: {
      totalSpaceLevel6: string
      usingSpaceLevel6: string
      line1: {
        line1CheckboxLevel0: boolean
        line1SpellNameLevel0: string
      }
      line2: {
        line2CheckboxLevel0: boolean
        line2SpellNameLevel0: string
      }
      line3: {
        line3CheckboxLevel0: boolean
        line3SpellNameLevel0: string
      }
      line4: {
        line4CheckboxLevel0: boolean
        line4SpellNameLevel0: string
      }
      line5: {
        line5CheckboxLevel0: boolean
        line5SpellNameLevel0: string
      }
      line6: {
        line6CheckboxLevel0: boolean
        line6SpellNameLevel0: string
      }
      line7: {
        line7CheckboxLevel0: boolean
        line7SpellNameLevel0: string
      }
      line8: {
        line8CheckboxLevel0: boolean
        line8SpellNameLevel0: string
      }
      line9: {
        line9CheckboxLevel0: boolean
        line9SpellNameLevel0: string
      }
      line10: {
        line10CheckboxLevel0: boolean
        line10SpellNameLevel0: string
      }
      line11: {
        line11CheckboxLevel0: boolean
        line11SpellNameLevel0: string
      }
      line12: {
        line12CheckboxLevel0: boolean
        line12SpellNameLevel0: string
      }
    }
    level7: {
      totalSpaceLevel7: string
      usingSpaceLevel7: string
      line1: {
        line1CheckboxLevel0: boolean
        line1SpellNameLevel0: string
      }
      line2: {
        line2CheckboxLevel0: boolean
        line2SpellNameLevel0: string
      }
      line3: {
        line3CheckboxLevel0: boolean
        line3SpellNameLevel0: string
      }
      line4: {
        line4CheckboxLevel0: boolean
        line4SpellNameLevel0: string
      }
      line5: {
        line5CheckboxLevel0: boolean
        line5SpellNameLevel0: string
      }
      line6: {
        line6CheckboxLevel0: boolean
        line6SpellNameLevel0: string
      }
      line7: {
        line7CheckboxLevel0: boolean
        line7SpellNameLevel0: string
      }
      line8: {
        line8CheckboxLevel0: boolean
        line8SpellNameLevel0: string
      }
      line9: {
        line9CheckboxLevel0: boolean
        line9SpellNameLevel0: string
      }
      line10: {
        line10CheckboxLevel0: boolean
        line10SpellNameLevel0: string
      }
      line11: {
        line11CheckboxLevel0: boolean
        line11SpellNameLevel0: string
      }
      line12: {
        line12CheckboxLevel0: boolean
        line12SpellNameLevel0: string
      }
    }
    level8: {
      totalSpaceLevel8: string
      usingSpaceLevel8: string
      line1: {
        line1CheckboxLevel0: boolean
        line1SpellNameLevel0: string
      }
      line2: {
        line2CheckboxLevel0: boolean
        line2SpellNameLevel0: string
      }
      line3: {
        line3CheckboxLevel0: boolean
        line3SpellNameLevel0: string
      }
      line4: {
        line4CheckboxLevel0: boolean
        line4SpellNameLevel0: string
      }
      line5: {
        line5CheckboxLevel0: boolean
        line5SpellNameLevel0: string
      }
      line6: {
        line6CheckboxLevel0: boolean
        line6SpellNameLevel0: string
      }
      line7: {
        line7CheckboxLevel0: boolean
        line7SpellNameLevel0: string
      }
      line8: {
        line8CheckboxLevel0: boolean
        line8SpellNameLevel0: string
      }
      line9: {
        line9CheckboxLevel0: boolean
        line9SpellNameLevel0: string
      }
      line10: {
        line10CheckboxLevel0: boolean
        line10SpellNameLevel0: string
      }
      line11: {
        line11CheckboxLevel0: boolean
        line11SpellNameLevel0: string
      }
      line12: {
        line12CheckboxLevel0: boolean
        line12SpellNameLevel0: string
      }
    }
    level9: {
      totalSpaceLevel9: string
      usingSpaceLevel9: string
      line1: {
        line1CheckboxLevel0: boolean
        line1SpellNameLevel0: string
      }
      line2: {
        line2CheckboxLevel0: boolean
        line2SpellNameLevel0: string
      }
      line3: {
        line3CheckboxLevel0: boolean
        line3SpellNameLevel0: string
      }
      line4: {
        line4CheckboxLevel0: boolean
        line4SpellNameLevel0: string
      }
      line5: {
        line5CheckboxLevel0: boolean
        line5SpellNameLevel0: string
      }
      line6: {
        line6CheckboxLevel0: boolean
        line6SpellNameLevel0: string
      }
      line7: {
        line7CheckboxLevel0: boolean
        line7SpellNameLevel0: string
      }
      line8: {
        line8CheckboxLevel0: boolean
        line8SpellNameLevel0: string
      }
      line9: {
        line9CheckboxLevel0: boolean
        line9SpellNameLevel0: string
      }
      line10: {
        line10CheckboxLevel0: boolean
        line10SpellNameLevel0: string
      }
      line11: {
        line11CheckboxLevel0: boolean
        line11SpellNameLevel0: string
      }
      line12: {
        line12CheckboxLevel0: boolean
        line12SpellNameLevel0: string
      }
    }
  }

  triumph: {
    alliesAndOrgs: string
    characteristicsAndTalentsAcquired: string
    orgImage: string
    treasure: string
  }
}