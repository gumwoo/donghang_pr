const mongoose = require('mongoose');

const WelfareServiceSchema = new mongoose.Schema({
  serviceId: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['문화', '교육', '의료', '생계', '주거', '고용', '기타']
  },
  targetAudience: {
    type: [String],
    required: true
  },
  eligibilityCriteria: {
    type: String,
    required: true
  },
  benefitDetails: {
    type: String,
    required: true
  },
  applicationMethod: {
    type: String,
    required: true
  },
  contactInformation: {
    type: String,
    required: true
  },
  provider: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: false
  },
  applicationDeadline: {
    type: Date,
    required: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// 업데이트 시 updatedAt 필드 자동 갱신
WelfareServiceSchema.pre('findOneAndUpdate', function() {
  this.set({ updatedAt: new Date() });
});

module.exports = mongoose.model('WelfareService', WelfareServiceSchema);
