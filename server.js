module.exports = {
  characters: [
    {
      id: 'aksbhdfweqjwkberasd',
      creatorEmail: 'vini_berna2.0@hotmail.com',
      characterSheet: {
        name: 'Antohn Pyotr',

        skillsSummary: {
          armorClass: 13,
          iniciative: 2,
          speed: 6,
          life: {
            points: 8,
            diceAmount: 1,
            diceSize: 8,
          },
          deathSaves: {
            success: {
              currentPoints: 0,
              total: 3
            },
            failures: {
              currentPoints: 0,
              total: 3
            }
          }
        },

        personality: {
          personalityTraits: 'naturalmente brincalhão, tem crises existenciais, gosta de jogos',
          ideals: 'segue sua proprio ideia religiosa e fingi acreditar no que lhe falam, segue as ideias morais da família',
          bonds: 'família, grupo de trabalho',
          flaws: 'fraqueza emocional, crises de dores de cabeças intensas',
          featuresAndTraits: {
            features: '',
            traits: ''
          }
        },

        infos: {
          class: 'bardo',
          level: 1,
          background: 'FB',
          playerName: 'Vinicius Paes Berna',
          race: 'Humano',
          alignment: 'CB',
          experiencePoints: 0
        },

        attributes: {
          strength: {
            points: 8,
            amplifierPoint: -1
          },

          dexterity: {
            points: 14,
            amplifierPoint: 2
          },

          constitution: {
            points: 10,
            amplifierPoint: 0
          },

          inteligence: {
            points: 12,
            amplifierPoint: 1
          },

          wisdom: {
            points: 14,
            amplifierPoint: 2
          },

          charisma: {
            points: 13,
            amplifierPoint: 1
          }
        },

        generalAmplifiers: {
          inspiration: 0,

          proficiencyBonus: 2,

          passiveWisdon: 10,

          savingThrows: {
            strength: {
              active: false,
              points: -1
            },

            dexterity: {
              active: true,
              points: 4
            },

            constitution: {
              active: false,
              points: 0
            },

            inteligence: {
              active: false,
              points: 1
            },

            wisdom: {
              active: false,
              points: 2
            },

            charisma: {
              active: true,
              points: 3
            },

          },

          skills: {
            acrobatics: {
              active: false,
              points: 2
            },

            arcana: {
              active: false,
              points: 1
            },

            athletics: {
              active: false,
              points: -1
            },

            deception: {
              active: false,
              points: 1
            },

			      history: {
              active: false,
              points: 2
            },

			      insight: {
              active: false,
              points: 2
            },

			      intimidation: {
              active: false,
              points: 1
            },

			      investigation: {
              active: false,
              points: 1
            },

			      medicine: {
              active: false,
              points: 2
            },
            
			      nature: {
              active: false,
              points: 1
            },

			      perception: {
              active: false,
              points: 4
            },

			      performance: {
              active: false,
              points: 1
            },

			      persuasion: {
              active: false,
              points: 3
            },

			      religion: {
              active: false,
              points: 1
            },

			      sleightOfHand: {
              active: false,
              points: 2
            },

			      stealth: {
              active: false,
              points: 4
            },

			      survival: {
              active: false,
              points: 2
            },
          }
        },
        
        equipment: {
          weapons: [
            {
            name: 'rapieira', 

            description: '',

            atk: {
                diceAmount: 1,
                diceSize: 8,
                amplifier: -1
              },
              atkBonus: {
                dexterityAmplifier: 0,
                strengthAmplifier: 0,
              },
            },
            {
              name: 'adaga',

              description: '',

              atk: {
                diceAmount: 1,
                diceSize: 5,
                amplifier: 0
              },
              atkBonus: {
                dexterityAmplifier: 2,
                strengthAmplifier: -1,
              },
            },
            {
              name: 'besta de mão',
                
              description: '',

              atk: {
                diceAmount: 1,
                diceSize: 5,
                amplifier: 0
              },
              atkBonus: {
                dexterityAmplifier: 2,
                strengthAmplifier: -1,
              },
            }, 
          ],

          inventory:{
            money:{
              pc: 0,
              pp: 70,
              pe: 0,
              po: 48,
              pl: 0,
            },

            tools: [
              {
                name: 'viola de roda',
                description: '',
              },
              {
                name: 'Flauta',
                description: '',
              },
              {
                name: 'Banndolim',
                description: '',
              },
              {
                name: 'Pacote de Diplomata',
                description: 'Inclui um baú, 2 caixas para mapas ou pergaminhos, um conjunto de roupas finas, um vidro de tinta, uma caneta tinteiro, uma lâmpada, 2 frascos de óleo, 5 folhas de papel, um vidro de perfume, parafina e sabão.',
              },
            ],
          }
        }
      }
    }
  ]
}