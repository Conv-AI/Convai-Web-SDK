# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: _proto/service/service.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1c_proto/service/service.proto\x12\x07service\"\x83\x01\n\x0b\x41udioConfig\x12\x19\n\x11sample_rate_hertz\x18\x01 \x01(\x05\x12\x15\n\rdisable_audio\x18\x02 \x01(\x08\x12\x1a\n\x12\x65nable_facial_data\x18\x03 \x01(\x08\x12&\n\nface_model\x18\x04 \x01(\x0e\x32\x12.service.FaceModel\">\n\rTriggerConfig\x12\x14\n\x0ctrigger_name\x18\x01 \x01(\t\x12\x17\n\x0ftrigger_message\x18\x02 \x01(\t\"\xa9\x02\n\x0c\x41\x63tionConfig\x12\x0f\n\x07\x61\x63tions\x18\x01 \x03(\t\x12\x33\n\ncharacters\x18\x02 \x03(\x0b\x32\x1f.service.ActionConfig.Character\x12-\n\x07objects\x18\x03 \x03(\x0b\x32\x1c.service.ActionConfig.Object\x12\x16\n\x0e\x63lassification\x18\x04 \x01(\t\x12\x15\n\rcontext_level\x18\x05 \x01(\x05\x12 \n\x18\x63urrent_attention_object\x18\x06 \x01(\t\x1a&\n\tCharacter\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0b\n\x03\x62io\x18\x02 \x01(\t\x1a+\n\x06Object\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x02 \x01(\t\"a\n\nSTTRequest\x12,\n\x0c\x61udio_config\x18\x01 \x01(\x0b\x32\x14.service.AudioConfigH\x00\x12\x15\n\x0b\x61udio_chunk\x18\x02 \x01(\x0cH\x00\x42\x0e\n\x0crequest_type\"\x1b\n\x0bSTTResponse\x12\x0c\n\x04text\x18\x01 \x01(\t\"\x8b\x04\n\x12GetResponseRequest\x12L\n\x13get_response_config\x18\x01 \x01(\x0b\x32-.service.GetResponseRequest.GetResponseConfigH\x00\x12H\n\x11get_response_data\x18\x02 \x01(\x0b\x32+.service.GetResponseRequest.GetResponseDataH\x00\x1a\xd0\x01\n\x11GetResponseConfig\x12\x14\n\x0c\x63haracter_id\x18\x02 \x01(\t\x12\x0f\n\x07\x61pi_key\x18\x03 \x01(\t\x12\x12\n\nsession_id\x18\x04 \x01(\t\x12*\n\x0c\x61udio_config\x18\x05 \x01(\x0b\x32\x14.service.AudioConfig\x12,\n\raction_config\x18\x06 \x01(\x0b\x32\x15.service.ActionConfig\x12\x0f\n\x07speaker\x18\x07 \x01(\t\x12\x15\n\rlanguage_code\x18\x08 \x01(\t\x1az\n\x0fGetResponseData\x12\x14\n\naudio_data\x18\x01 \x01(\x0cH\x00\x12\x13\n\ttext_data\x18\x02 \x01(\tH\x00\x12.\n\x0ctrigger_data\x18\x03 \x01(\x0b\x32\x16.service.TriggerConfigH\x00\x42\x0c\n\ninput_typeB\x0e\n\x0crequest_type\"\x84\x01\n\x18GetResponseRequestSingle\x12\x34\n\x0fresponse_config\x18\x01 \x01(\x0b\x32\x1b.service.GetResponseRequest\x12\x32\n\rresponse_data\x18\x02 \x01(\x0b\x32\x1b.service.GetResponseRequest\"\xdc\x06\n\x13GetResponseResponse\x12\x12\n\nsession_id\x18\x01 \x01(\t\x12\x46\n\x0f\x61\x63tion_response\x18\x02 \x01(\x0b\x32+.service.GetResponseResponse.ActionResponseH\x00\x12\x44\n\x0e\x61udio_response\x18\x03 \x01(\x0b\x32*.service.GetResponseResponse.AudioResponseH\x00\x12\x13\n\tdebug_log\x18\x04 \x01(\tH\x00\x12\x41\n\nuser_query\x18\x05 \x01(\x0b\x32+.service.GetResponseResponse.UserTranscriptH\x00\x12H\n\x0b\x62t_response\x18\x06 \x01(\x0b\x32\x31.service.GetResponseResponse.BehaviorTreeResponseH\x00\x12\x1a\n\x10\x65motion_response\x18\x07 \x01(\tH\x00\x1a\x84\x02\n\rAudioResponse\x12\x12\n\naudio_data\x18\x01 \x01(\x0c\x12*\n\x0c\x61udio_config\x18\x02 \x01(\x0b\x32\x14.service.AudioConfig\x12\x11\n\ttext_data\x18\x03 \x01(\t\x12\x17\n\x0f\x65nd_of_response\x18\x04 \x01(\x08\x12\x11\n\tface_data\x18\x05 \x01(\t\x12,\n\x0cvisemes_data\x18\x06 \x01(\x0b\x32\x14.service.VisemesDataH\x00\x12\x34\n\x10\x62lendshapes_data\x18\x07 \x01(\x0b\x32\x18.service.BlendShapesDataH\x00\x42\x10\n\x0e\x66\x61\x63\x65_data_type\x1a \n\x0e\x41\x63tionResponse\x12\x0e\n\x06\x61\x63tion\x18\x01 \x01(\t\x1a[\n\x14\x42\x65haviorTreeResponse\x12\x0f\n\x07\x62t_code\x18\x01 \x01(\t\x12\x14\n\x0c\x62t_constants\x18\x02 \x01(\t\x12\x1c\n\x14narrative_section_id\x18\x03 \x01(\t\x1aN\n\x0eUserTranscript\x12\x11\n\ttext_data\x18\x01 \x01(\t\x12\x10\n\x08is_final\x18\x02 \x01(\x08\x12\x17\n\x0f\x65nd_of_response\x18\x03 \x01(\x08\x42\x0f\n\rresponse_type\"/\n\x0bVisemesData\x12 \n\x07visemes\x18\x01 \x01(\x0b\x32\x0f.service.Viseme\"\xbc\x01\n\x06Viseme\x12\x0b\n\x03sil\x18\x01 \x01(\x02\x12\n\n\x02pp\x18\x02 \x01(\x02\x12\n\n\x02\x66\x66\x18\x03 \x01(\x02\x12\n\n\x02th\x18\x04 \x01(\x02\x12\n\n\x02\x64\x64\x18\x05 \x01(\x02\x12\n\n\x02kk\x18\x06 \x01(\x02\x12\n\n\x02\x63h\x18\x07 \x01(\x02\x12\n\n\x02ss\x18\x08 \x01(\x02\x12\n\n\x02nn\x18\t \x01(\x02\x12\n\n\x02rr\x18\n \x01(\x02\x12\n\n\x02\x61\x61\x18\x0b \x01(\x02\x12\t\n\x01\x65\x18\x0c \x01(\x02\x12\n\n\x02ih\x18\r \x01(\x02\x12\n\n\x02oh\x18\x0e \x01(\x02\x12\n\n\x02ou\x18\x0f \x01(\x02\"*\n\x0f\x42lendShapesData\x12\x17\n\x0f\x62lendshape_data\x18\x01 \x01(\t\"\x1c\n\x0cHelloRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\" \n\rHelloResponse\x12\x0f\n\x07message\x18\x01 \x01(\t*\x8a\x01\n\tFaceModel\x12\x1a\n\x16\x46\x41\x43\x45_MODEL_UNSPECIFIED\x10\x00\x12\x1e\n\x1a\x46\x41\x43\x45_MODEL_A_2F_MODEL_NAME\x10\x01\x12\"\n\x1e\x46\x41\x43\x45_MODEL_PHONEMES_MODEL_NAME\x10\x02\x12\x1d\n\x19\x46\x41\x43\x45_MODEL_OVR_MODEL_NAME\x10\x03\x32\xf8\x02\n\rConvaiService\x12\x38\n\x05Hello\x12\x15.service.HelloRequest\x1a\x16.service.HelloResponse\"\x00\x12\x42\n\x0bHelloStream\x12\x15.service.HelloRequest\x1a\x16.service.HelloResponse\"\x00(\x01\x30\x01\x12?\n\x0cSpeechToText\x12\x13.service.STTRequest\x1a\x14.service.STTResponse\"\x00(\x01\x30\x01\x12N\n\x0bGetResponse\x12\x1b.service.GetResponseRequest\x1a\x1c.service.GetResponseResponse\"\x00(\x01\x30\x01\x12X\n\x11GetResponseSingle\x12!.service.GetResponseRequestSingle\x1a\x1c.service.GetResponseResponse\"\x00\x30\x01\x62\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, '_proto.service.service_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _FACEMODEL._serialized_start=2540
  _FACEMODEL._serialized_end=2678
  _AUDIOCONFIG._serialized_start=42
  _AUDIOCONFIG._serialized_end=173
  _TRIGGERCONFIG._serialized_start=175
  _TRIGGERCONFIG._serialized_end=237
  _ACTIONCONFIG._serialized_start=240
  _ACTIONCONFIG._serialized_end=537
  _ACTIONCONFIG_CHARACTER._serialized_start=454
  _ACTIONCONFIG_CHARACTER._serialized_end=492
  _ACTIONCONFIG_OBJECT._serialized_start=494
  _ACTIONCONFIG_OBJECT._serialized_end=537
  _STTREQUEST._serialized_start=539
  _STTREQUEST._serialized_end=636
  _STTRESPONSE._serialized_start=638
  _STTRESPONSE._serialized_end=665
  _GETRESPONSEREQUEST._serialized_start=668
  _GETRESPONSEREQUEST._serialized_end=1191
  _GETRESPONSEREQUEST_GETRESPONSECONFIG._serialized_start=843
  _GETRESPONSEREQUEST_GETRESPONSECONFIG._serialized_end=1051
  _GETRESPONSEREQUEST_GETRESPONSEDATA._serialized_start=1053
  _GETRESPONSEREQUEST_GETRESPONSEDATA._serialized_end=1175
  _GETRESPONSEREQUESTSINGLE._serialized_start=1194
  _GETRESPONSEREQUESTSINGLE._serialized_end=1326
  _GETRESPONSERESPONSE._serialized_start=1329
  _GETRESPONSERESPONSE._serialized_end=2189
  _GETRESPONSERESPONSE_AUDIORESPONSE._serialized_start=1705
  _GETRESPONSERESPONSE_AUDIORESPONSE._serialized_end=1965
  _GETRESPONSERESPONSE_ACTIONRESPONSE._serialized_start=1967
  _GETRESPONSERESPONSE_ACTIONRESPONSE._serialized_end=1999
  _GETRESPONSERESPONSE_BEHAVIORTREERESPONSE._serialized_start=2001
  _GETRESPONSERESPONSE_BEHAVIORTREERESPONSE._serialized_end=2092
  _GETRESPONSERESPONSE_USERTRANSCRIPT._serialized_start=2094
  _GETRESPONSERESPONSE_USERTRANSCRIPT._serialized_end=2172
  _VISEMESDATA._serialized_start=2191
  _VISEMESDATA._serialized_end=2238
  _VISEME._serialized_start=2241
  _VISEME._serialized_end=2429
  _BLENDSHAPESDATA._serialized_start=2431
  _BLENDSHAPESDATA._serialized_end=2473
  _HELLOREQUEST._serialized_start=2475
  _HELLOREQUEST._serialized_end=2503
  _HELLORESPONSE._serialized_start=2505
  _HELLORESPONSE._serialized_end=2537
  _CONVAISERVICE._serialized_start=2681
  _CONVAISERVICE._serialized_end=3057
# @@protoc_insertion_point(module_scope)
