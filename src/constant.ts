interface AIConfig {
    apiKey: string | null;
    model: string | null;
  }
  
  export const aiConfigs: AIConfig = {
    apiKey: null,
    model: null,
  };
  
  export const setAIConfig = (apiKey: string, model: string) => {
    aiConfigs.apiKey = apiKey;
    aiConfigs.model = model;
  };
  